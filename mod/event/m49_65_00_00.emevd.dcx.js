// ==EMEVD==
// @docs    nr-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "W:\\CL\\data\\Param\\event\\common_func.emevd\u0000W:\\CL\\data\\Param\\event\\common_macro.emevd\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0,82]
// @version    3.6.2
// ==/EMEVD==

$Event(0, Default, function() {
    if (IsMapVariation(0)) {
        if (EventFlag(49650000)) {
            $InitializeCommonEvent(0, 90055000, 49655200, 1, 49652200, 49650201);
            $InitializeCommonEvent(0, 90055001, 49655200, 1, 49650201, 49650200);
        }
        if (EventFlag(49650001)) {
            $InitializeCommonEvent(0, 90055000, 49655200, 2, 49652200, 49650201);
            $InitializeCommonEvent(0, 90055001, 49655200, 2, 49650201, 49650200);
        }
    }
    if (IsMapVariation(1)) {
        $InitializeCommonEvent(0, 90035000, 49650200);
    }
    if (IsMapVariation(2)) {
        $InitializeCommonEvent(0, 90015442, 49652200, 49650200);
    }
    $InitializeCommonEvent(0, 90065910, 49650200, 49652205, 49650800, 920700, 690047, 49650800, 49650800, 904965000, 0, 0, 0, 0);
    $InitializeCommonEvent(0, 90065911, 49650200, 49650800, 920700, 49650800, 49650800, 904965000, 0, 0, 0, 0, 0);
    if (!IsMapVariation(2)) {
        $InitializeCommonEvent(0, 90065900, 49650800, 2, 0, 0, 1050, 920700, 904965000, 49650800);
    }
    $InitializeCommonEvent(0, 90015012, 49650800, 49650200);
    $InitializeCommonEvent(0, 90015020, 49650200, 49650800);
    $InitializeCommonEvent(0, 90015008, 49652205, 49650800, 920700, 49650800, 16230, 0);
    $InitializeCommonEvent(0, 90065920, 49650800, 7315);
    if (IsMapVariation(2)) {
        $InitializeCommonEvent(0, 90015443, 49652200, 49650800);
        $InitializeCommonEvent(0, 90015023, 49650200, 40, 0, 49650800, 49650800, 904965000, 0, 0, 0, 0);
        $InitializeCommonEvent(0, 90015030, 49650200, 49650800, 40, 920700, 0);
        $InitializeCommonEvent(0, 90015002, 0, 49650200, 49650800, 49650800, 1020, 920700, 110320, 904965000, 49650800);
        $InitializeCommonEvent(0, 90015470, 49652200, 49650200, 49650800, 49650800, 0, 0, 0);
        $InitializeCommonEvent(0, 90015476, 10002, 49652200);
        $InitializeCommonEvent(0, 90015476, 10003, 49652200);
        $InitializeCommonEvent(0, 90015476, 10004, 49652200);
        $InitializeCommonEvent(0, 90065140, 49650800);
    }
    if (IsMapVariation(2)) {
        $InitializeCommonEvent(0, 90015446, 49650800, 49650200, 49650800, 49652200);
    }
    if (IsMapVariation(2)) {
        $InitializeCommonEvent(0, 90015460, 49652200, 49650800);
    }
    if (IsMapVariation(2)) {
        $InitializeCommonEvent(0, 90015475, 49652200, 49650800);
    }
    $InitializeCommonEvent(0, 90035001, 49650800);
    if (2 == 1) {
        $InitializeCommonEvent(0, 90015070, 1056402601, 49650000, 49650300);
        $InitializeCommonEvent(0, 90015070, 1028402600, 49650000, 49650300);
    }
    if (2 == 2) {
        $InitializeCommonEvent(0, 90015070, 1056402602, 49650000, 49650300);
        $InitializeCommonEvent(0, 90015070, 1028402601, 49650000, 49650300);
    }
    if (2 == 3) {
        $InitializeCommonEvent(0, 90015070, 1056402603, 49650000, 49650300);
        $InitializeCommonEvent(0, 90015070, 1028402602, 49650000, 49650300);
    }
    if (3 == 1) {
        $InitializeCommonEvent(0, 90015070, 1056402601, 49650000, 49650301);
        $InitializeCommonEvent(0, 90015070, 1028402600, 49650000, 49650301);
    }
    if (3 == 2) {
        $InitializeCommonEvent(0, 90015070, 1056402602, 49650000, 49650301);
        $InitializeCommonEvent(0, 90015070, 1028402601, 49650000, 49650301);
    }
    if (3 == 3) {
        $InitializeCommonEvent(0, 90015070, 1056402603, 49650000, 49650301);
        $InitializeCommonEvent(0, 90015070, 1028402602, 49650000, 49650301);
    }
});

$Event(49652800, Default, function(chrEntityId, assetEntityId, chrEntityId2, eventFlagId, eventFlagId2, eventFlagId3) {
    EndIf(EventFlag(eventFlagId));
    EndIf(EventFlag(eventFlagId2));
    WaitFor(HPRatio(chrEntityId) <= 0);
    WaitFixedTimeSeconds(4);
    WaitFor(CharacterDead(chrEntityId));
    DisplayBossHealthBar(Disabled, chrEntityId, 0, 0);
    if (assetEntityId != 0) {
        EnableAsset(assetEntityId);
    }
    if (chrEntityId2 != 0) {
        EnableCharacter(chrEntityId2);
    }
    if (!EventFlag(eventFlagId3)) {
        SetEventFlagID(eventFlagId, ON);
        EndEvent();
    }
    SetEventFlagID(eventFlagId2, ON);
    WaitFor(ElapsedSeconds(3));
    DisableCharacter(chrEntityId);
});

$Event(49652810, Restart, function(chrEntityId, eventFlagId, eventFlagId2, eventFlagId3, nameId, eventFlagId4, eventFlagId5) {
    if (EventFlag(eventFlagId4) || EventFlag(eventFlagId5)) {
        DisableCharacter(chrEntityId);
        DisableCharacterCollision(chrEntityId);
        ForceCharacterDeath(chrEntityId, false);
        EndEvent();
    }
L0:
    DisableCharacter(chrEntityId);
    DisableCharacterCollision(chrEntityId);
    DisableCharacterAI(chrEntityId);
    flag = EventFlag(7515) && (EventFlag(eventFlagId) || EventFlag(eventFlagId2));
    WaitFor(EventFlag(eventFlagId3));
    WaitFixedTimeSeconds(1);
    EnableCharacter(chrEntityId);
    EnableCharacterCollision(chrEntityId);
    EnableCharacterAI(chrEntityId);
    ForceAnimationPlayback(49650800, 20005, false, false, false);
    DisableCharacterHPBarDisplay(chrEntityId);
    DisableCharacterHPBarDisplay(49650801);
    CreateReferredDamagePair(49650801, chrEntityId);
    CreateReferredDamagePair(49650802, chrEntityId);
    EnableCharacterAI(chrEntityId);
    SetNetworkUpdateRate(49650800, true, CharacterUpdateFrequency.AlwaysUpdate);
    DisplayBossHealthBar(Enabled, chrEntityId, 0, nameId);
});


