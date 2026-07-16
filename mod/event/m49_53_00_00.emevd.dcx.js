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
        if (EventFlag(49530000)) {
            $InitializeCommonEvent(0, 90055000, 49535200, 1, 49532200, 49530201);
            $InitializeCommonEvent(0, 90055001, 49535200, 1, 49530201, 49530200);
        }
        if (EventFlag(49530001)) {
            $InitializeCommonEvent(0, 90055000, 49535200, 2, 49532200, 49530201);
            $InitializeCommonEvent(0, 90055001, 49535200, 2, 49530201, 49530200);
        }
    }
    if (IsMapVariation(1)) {
        $InitializeCommonEvent(0, 90035000, 49530200);
    }
    if (IsMapVariation(2)) {
        $InitializeCommonEvent(0, 90015442, 49532200, 49530200);
    }
    $InitializeCommonEvent(0, 90065910, 49530200, 49530205, 49530800, 950000, 690047, 49535210, 49530800, 904973000, 0, 0, 0, 0);
    $InitializeCommonEvent(0, 90065911, 49530200, 49530800, 950000, 49535210, 49530800, 904973000, 0, 0, 0, 0, 0);
    if (!IsMapVariation(2)) {
        $InitializeCommonEvent(0, 90065900, 49530800, 1, 0, 0, 1050, 950000, 904973000, 49530800);
    }
    $InitializeCommonEvent(0, 90015012, 49535210, 49530200);
    $InitializeCommonEvent(1, 90015012, 0, 49530200);
    $InitializeCommonEvent(0, 90015020, 49530200, 49530800);
    $InitializeCommonEvent(0, 90015008, 49530205, 49530800, 950000, 49530800, 14771, 0);
    if (IsMapVariation(2)) {
        $InitializeCommonEvent(0, 90015443, 49532200, 49530800);
        $InitializeCommonEvent(0, 90015023, 49530200, 40, 0, 49535210, 49530800, 904973000, 0, 0, 0, 0);
        $InitializeCommonEvent(0, 90015030, 49530200, 49535210, 40, 950000, 0);
        $InitializeCommonEvent(0, 90015002, 0, 49530200, 0, 49535210, 1020, 950000, 110320, 904973000, 49530800);
        $InitializeCommonEvent(0, 90015470, 49532200, 49530200, 49530800, 49535210, 0, 0, 49535210);
        $InitializeCommonEvent(0, 90015446, 49535210, 49530200, 49530800, 49532200);
        $InitializeCommonEvent(0, 90015460, 49532200, 49530800);
        $InitializeCommonEvent(0, 90015460, 49532200, 0);
        $InitializeCommonEvent(0, 90015460, 49532200, 0);
    }
    if (IsMapVariation(2)) {
        $InitializeCommonEvent(0, 90015475, 49532200, 49530800);
        $InitializeCommonEvent(0, 90015475, 49532200, 0);
        $InitializeCommonEvent(0, 90015475, 49532200, 0);
    }
    $InitializeCommonEvent(0, 90035001, 49530800);
    if (1 == 1) {
        $InitializeCommonEvent(0, 90015070, 1056402601, 49530000, 49530300);
        $InitializeCommonEvent(0, 90015070, 1028402600, 49530000, 49530300);
    }
    if (1 == 2) {
        $InitializeCommonEvent(0, 90015070, 1056402602, 49530000, 49530300);
        $InitializeCommonEvent(0, 90015070, 1028402601, 49530000, 49530300);
    }
    if (1 == 3) {
        $InitializeCommonEvent(0, 90015070, 1056402603, 49530000, 49530300);
        $InitializeCommonEvent(0, 90015070, 1028402602, 49530000, 49530300);
    }
    if (2 == 1) {
        $InitializeCommonEvent(0, 90015070, 1056402601, 49530000, 49530301);
        $InitializeCommonEvent(0, 90015070, 1028402600, 49530000, 49530301);
    }
    if (2 == 2) {
        $InitializeCommonEvent(0, 90015070, 1056402602, 49530000, 49530301);
        $InitializeCommonEvent(0, 90015070, 1028402601, 49530000, 49530301);
    }
    if (2 == 3) {
        $InitializeCommonEvent(0, 90015070, 1056402603, 49530000, 49530301);
        $InitializeCommonEvent(0, 90015070, 1028402602, 49530000, 49530301);
    }
});

$Event(495302800, Default, function(chrEntityId, assetEntityId, chrEntityId2, eventFlagId, eventFlagId2, eventFlagId3) {
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

$Event(49532810, Restart, function(chrEntityId, eventFlagId, eventFlagId2, eventFlagId3, nameId, eventFlagId4, eventFlagId5) {
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
    ForceAnimationPlayback(49530800, 20012, false, false, false);
    DisableCharacterHPBarDisplay(chrEntityId);
    DisableCharacterHPBarDisplay(49530801);
    EnableCharacterAI(chrEntityId);
    SetNetworkUpdateRate(49530800, true, CharacterUpdateFrequency.AlwaysUpdate);
    DisplayBossHealthBar(Enabled, chrEntityId, 0, nameId);
});
