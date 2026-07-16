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
        if (EventFlag(49770000)) {
            $InitializeCommonEvent(0, 90055000, 49775200, 1, 49772200, 49770201);
            $InitializeCommonEvent(0, 90055001, 49775200, 1, 49770201, 49770200);
        }
        if (EventFlag(49770001)) {
            $InitializeCommonEvent(0, 90055000, 49775200, 2, 49772200, 49770201);
            $InitializeCommonEvent(0, 90055001, 49775200, 2, 49770201, 49770200);
        }
    }
    if (IsMapVariation(1)) {
        $InitializeCommonEvent(0, 90035000, 49770200);
    }
    if (IsMapVariation(2)) {
        $InitializeCommonEvent(0, 90015442, 49772200, 49770200);
    }
    $InitializeCommonEvent(0, 90065910, 49770200, 49770205, 49770800, 941000, 690047, 49775210, 49770800, 907920001, 0, 0, 0, 0);
    $InitializeCommonEvent(0, 90065911, 49770200, 49770800, 941000, 49775210, 49770800, 907920001, 0, 0, 0, 0, 0);
    if (!IsMapVariation(2)) {
        $InitializeCommonEvent(0, 90065900, 49770800, 1, 0, 0, 1050, 941000, 907920001, 49770800);
    }
    $InitializeCommonEvent(0, 90015012, 49775210, 49770200);
    $InitializeCommonEvent(1, 90015012, 0, 49770200);
    $InitializeCommonEvent(0, 90015020, 49770200, 49770800);
    $InitializeCommonEvent(0, 90015008, 49770205, 49770800, 941000, 49770800, 14771, 0);
    if (IsMapVariation(2)) {
        $InitializeCommonEvent(0, 90015443, 49772200, 49770800);
        $InitializeCommonEvent(0, 90015023, 49770200, 40, 0, 49775210, 49770800, 907920001, 0, 0, 0, 0);
        $InitializeCommonEvent(0, 90015030, 49770200, 49775210, 40, 941000, 0);
        $InitializeCommonEvent(0, 90015002, 0, 49770200, 49770800, 49775210, 1020, 941000, 110320, 907920001, 49770800);
        $InitializeCommonEvent(0, 90015470, 49772200, 49770200, 49770800, 49775210, 0, 0, 49775210);
        $InitializeCommonEvent(0, 90015446, 49775210, 49770200, 49770800, 49772200);
        $InitializeCommonEvent(0, 90015460, 49772200, 49770800);
        $InitializeCommonEvent(0, 90015460, 49772200, 0);
        $InitializeCommonEvent(0, 90015460, 49772200, 0);
    }
    if (IsMapVariation(2)) {
        $InitializeCommonEvent(0, 90015475, 49772200, 49770800);
        $InitializeCommonEvent(0, 90015475, 49772200, 0);
        $InitializeCommonEvent(0, 90015475, 49772200, 0);
    }
    $InitializeCommonEvent(0, 90035001, 49770800);
    if (1 == 1) {
        $InitializeCommonEvent(0, 90015070, 1056402601, 49770000, 49770300);
        $InitializeCommonEvent(0, 90015070, 1028402600, 49770000, 49770300);
    }
    if (1 == 2) {
        $InitializeCommonEvent(0, 90015070, 1056402602, 49770000, 49770300);
        $InitializeCommonEvent(0, 90015070, 1028402601, 49770000, 49770300);
    }
    if (1 == 3) {
        $InitializeCommonEvent(0, 90015070, 1056402603, 49770000, 49770300);
        $InitializeCommonEvent(0, 90015070, 1028402602, 49770000, 49770300);
    }
    if (2 == 1) {
        $InitializeCommonEvent(0, 90015070, 1056402601, 49770000, 49770301);
        $InitializeCommonEvent(0, 90015070, 1028402600, 49770000, 49770301);
    }
    if (2 == 2) {
        $InitializeCommonEvent(0, 90015070, 1056402602, 49770000, 49770301);
        $InitializeCommonEvent(0, 90015070, 1028402601, 49770000, 49770301);
    }
    if (2 == 3) {
        $InitializeCommonEvent(0, 90015070, 1056402603, 49770000, 49770301);
        $InitializeCommonEvent(0, 90015070, 1028402602, 49770000, 49770301);
    }
});

$Event(497702800, Default, function(chrEntityId, assetEntityId, chrEntityId2, eventFlagId, eventFlagId2, eventFlagId3) {
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

$Event(49772810, Restart, function(chrEntityId, eventFlagId, eventFlagId2, eventFlagId3, nameId, eventFlagId4, eventFlagId5) {
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
    DisableCharacterHPBarDisplay(chrEntityId);
    DisableCharacterHPBarDisplay(49770801);
    EnableCharacterAI(chrEntityId);
    SetNetworkUpdateRate(49770800, true, CharacterUpdateFrequency.AlwaysUpdate);
    DisplayBossHealthBar(Enabled, chrEntityId, 0, nameId);
});


